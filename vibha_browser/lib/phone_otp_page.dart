import 'package:flutter/material.dart';
import 'auth_service.dart';

class PhoneOTPPage extends StatefulWidget {
  final String mobileNumber;

  const PhoneOTPPage({Key? key, required this.mobileNumber}) : super(key: key);

  @override
  State<PhoneOTPPage> createState() => _PhoneOTPPageState();
}

class _PhoneOTPPageState extends State<PhoneOTPPage> {
  final _otpController = TextEditingController();
  final _authService = AuthService();
  bool _isLoading = false;
  String? _errorMessage;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Verify Phone OTP')),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            if (_errorMessage != null)
              Text(
                _errorMessage!,
                style: const TextStyle(color: Colors.red),
              ),
            Text(
              'An OTP has been sent to ${widget.mobileNumber}',
              textAlign: TextAlign.center,
            ),
            const SizedBox(height: 20),
            TextFormField(
              controller: _otpController,
              decoration: const InputDecoration(labelText: 'OTP'),
              keyboardType: TextInputType.number,
            ),
            const SizedBox(height: 20),
            ElevatedButton(
              onPressed: () async {
                setState(() {
                  _isLoading = true;
                  _errorMessage = null;
                });
                try {
                  final isValid = await _authService.verifyPhoneOTP(
                    mobileNumber: widget.mobileNumber,
                    otp: _otpController.text,
                  );
                  if (isValid) {
                    // OTP verification successful
                    print('OTP verification successful');
                    // Navigate to the main page
                    Navigator.of(context).pushReplacement(
                      MaterialPageRoute(builder: (context) => MyHomePage()),
                    );
                  } else {
                    // OTP verification failed
                    _errorMessage = 'OTP verification failed';
                  }
                } catch (error) {
                  _errorMessage = error.toString();
                } finally {
                  setState(() {
                    _isLoading = false;
                  });
                }
              },
              child: _isLoading
                  ? const CircularProgressIndicator()
                  : const Text('Verify OTP'),
            ),
          ],
        ),
      ),
    );
  }
}