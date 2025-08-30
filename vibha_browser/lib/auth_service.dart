import 'package:supabase_flutter/supabase_flutter.dart';
import 'package:postgrest/postgrest.dart';

class AuthService {
  final _supabase = Supabase.instance.client;

  final _vibhaSupabase = PostgrestClient(
    'https://nclaopzwowfejyxcujic.supabase.co',
    headers: {'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5jbGFvcHp3b3dmZWp5eGN1amljIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY1NDk4NzYsImV4cCI6MjA3MjEyNTg3Nn0.QCl8ClMYss1i_5stwuW9ojt8zd9tG5A5lkOi7cpUqNU'},
    schema: 'public',
  );
  Future<AuthResponse> signUpWithEmail(
      {required String email,
      required String password}) async {
    final res = await _supabase.auth.signUp(
      email: email,
      password: password,
    );
    if (res.user != null) {
      // Also create user in vibha database
      try {
        await _vibhaSupabase.from('users').insert({
          'id': res.user!.id,
          'email': email,
          'hashed_password': password, // Consider hashing before storing
        });
      } catch (e) {
        print('Error creating user in vibha database: $e');
      }
    }
    return res;
  }

  Future<AuthResponse> signInWithEmail(
      {required String email,
      required String password}) async {

    return await _supabase.auth.signInWithPassword(
      email: email,
      password: password,
    );

  }

  Future<AuthResponse> signUpWithMobile(
      {required String mobileNumber,
      required String password}) async {
    final res = await _supabase.auth.signUp(
      phone: mobileNumber,
      password: password,
    );
     if (res.user != null) {
      // Also create user in vibha database
      try {
        await _vibhaSupabase.from('users').insert({
          'id': res.user!.id,
          'mobile_number': mobileNumber,
          'hashed_password': password, // Consider hashing before storing
        });
      } catch (e) {
        print('Error creating user in vibha database: $e');
      }
    }
    return res;
  }

  Future<AuthResponse> signInWithMobile(
      {required String mobileNumber,
      required String password}) async {

    return await _supabase.auth.signInWithPassword(
      phone: mobileNumber,
      password: password,
    );

  }

  Future<bool> verifyOTP({
    required String email,
    required String otp,
  }) async {
    final res = await _supabase.auth.verifyOTP(
      email: email,
      token: otp, // Pass the OTP to the 'token' parameter
      type: OtpType.email,
    );
    return res.session != null;
  }

  Future<bool> verifyPhoneOTP({
    required String mobileNumber,
    required String otp,
  }) async {
    final res = await _supabase.auth.verifyOTP(
      phone: mobileNumber,
      token: otp, // Pass the OTP to the 'token' parameter
      type: OtpType.phone,
    );
    return res.session != null;
  }

  Future<void> signOut() async {
    await _supabase.auth.signOut();
  }

  User? getCurrentUser() {
    return _supabase.auth.currentUser;
  }
}

