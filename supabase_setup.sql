
-- SQL commands to set up user authentication in Supabase (for both vidya1 and vibha)

-- Create a table to store user profiles
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) UNIQUE,
    mobile_number VARCHAR(20) UNIQUE,
    hashed_password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);



-- Create a table to store email OTPs
CREATE TABLE email_otps (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id),
    otp VARCHAR(6) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    expires_at TIMESTAMP WITH TIME ZONE NOT NULL
);

-- Create a table to store phone OTPs
CREATE TABLE phone_otps (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    mobile_number VARCHAR(20) NOT NULL,
    otp VARCHAR(6) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    expires_at TIMESTAMP WITH TIME ZONE NOT NULL
);

-- Function to create a new user
CREATE OR REPLACE FUNCTION create_user(
    email VARCHAR(255),
    mobile_number VARCHAR(20),
    password VARCHAR(255)
) RETURNS UUID AS $$
DECLARE
    user_id UUID;
BEGIN
    -- Hash the password
    hashed_password := crypt(password, gen_salt('bf'));

    -- Insert the new user into the users table
    INSERT INTO users (email, mobile_number, hashed_password)
    VALUES (email, mobile_number, hashed_password)
    RETURNING id INTO user_id;

    RETURN user_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;



-- Function to verify email OTP
CREATE OR REPLACE FUNCTION verify_email_otp(
    user_id UUID,
    otp VARCHAR(6)
) RETURNS BOOLEAN AS $$
DECLARE
    otp_record RECORD;
BEGIN
    -- Find the OTP record
    SELECT * INTO otp_record

    FROM email_otps
    WHERE user_id = user_id
    AND otp = otp
    AND expires_at > NOW();

    -- If an OTP record is found, delete it and return true
    IF FOUND THEN

        DELETE FROM email_otps WHERE id = otp_record.id;
        RETURN TRUE;
    ELSE
        RETURN FALSE;
    END IF;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;



-- Function to generate email OTP
CREATE OR REPLACE FUNCTION generate_email_otp(
    user_id UUID
) RETURNS VARCHAR(6) AS $$
DECLARE
    otp VARCHAR(6);
    expires_at TIMESTAMP WITH TIME ZONE;
BEGIN
    -- Generate a random 6-digit OTP
    otp := floor(random() * 900000 + 100000)::TEXT;

    -- Set the expiration time to 15 minutes from now
    expires_at := NOW() + INTERVAL '15 minutes';



    -- Insert the OTP into the email_otps table
    INSERT INTO email_otps (user_id, otp, expires_at)
    VALUES (user_id, otp, expires_at);

    RETURN otp;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to verify phone OTP
CREATE OR REPLACE FUNCTION verify_phone_otp(
    mobile_number VARCHAR(20),
    otp VARCHAR(6)
) RETURNS BOOLEAN AS $$
DECLARE
    otp_record RECORD;
BEGIN
    -- Find the OTP record
    SELECT * INTO otp_record
    FROM phone_otps
    WHERE mobile_number = mobile_number
    AND otp = otp
    AND expires_at > NOW();

    -- If an OTP record is found, delete it and return true
    IF FOUND THEN
        DELETE FROM phone_otps WHERE id = otp_record.id;
        RETURN TRUE;
    ELSE
        RETURN FALSE;
    END IF;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to generate phone OTP
CREATE OR REPLACE FUNCTION generate_phone_otp(
    mobile_number VARCHAR(20)
) RETURNS VARCHAR(6) AS $$
DECLARE
    otp VARCHAR(6);
    expires_at TIMESTAMP WITH TIME ZONE;
BEGIN
    -- Generate a random 6-digit OTP
    otp := floor(random() * 900000 + 100000)::TEXT;

    -- Set the expiration time to 15 minutes from now
    expires_at := NOW() + INTERVAL '15 minutes';

    -- Insert the OTP into the phone_otps table
    INSERT INTO phone_otps (mobile_number, otp, expires_at)
    VALUES (mobile_number, otp, expires_at);

    RETURN otp;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

