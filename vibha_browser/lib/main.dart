import 'package:flutter/material.dart';
import 'package:webview_flutter/webview_flutter.dart';
import 'search_engine_helper.dart';
import 'auth_service.dart';
import 'package:supabase_flutter/supabase_flutter.dart';
import 'otp_page.dart';
import 'phone_otp_page.dart';
import 'local_storage_service.dart';
import 'permission_service.dart';
import 'package:sentry_flutter/sentry_flutter.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();

































































































































  await SentryFlutter.init(
    (options) {
      options.dsn = 'YOUR_SENTRY_DSN'; // Replace with your Sentry DSN
    },
    appRunner: () async {
      await Supabase.initialize(
        url: 'https://toycrvtjsuhlgqxazkft.supabase.co',
        anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRveWNydnRqc3VobGdxeGF6a2Z0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY1NDk3MjAsImV4cCI6MjA3MjEyNTcyMH0.Mm1iv7pDLF5Kse0tljOoJ8ZGqGa7bPGjJsYHjvhpeyc',
      );
      await LocalStorageService.initialize();
      runApp(MyApp());
    },
  );
}
class MyApp extends StatelessWidget {
  @override













  Widget build(BuildContext context) {




































































    return MaterialApp(
      title: 'Vibha Browser',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: AuthGate(),
    );



























































  }
}

class AuthGate extends StatefulWidget {
  const AuthGate({Key? key}) : super(key: key);
  @override

  State<AuthGate> createState() => _AuthGateState();
}






class _AuthGateState extends State<AuthGate> {
  final _authService = AuthService();
  bool _isLoading = false;
  String? _errorMessage;
  @override






















  Widget build(BuildContext context) {
    final user = _authService.getCurrentUser();
    return user == null ? const SignInPage() : MyHomePage();
  }
}

class SignInPage extends StatefulWidget {
  const SignInPage({Key? key}) : super(key: key);

  @override
  State<SignInPage> createState() => _SignInPageState();
}

class _SignInPageState extends State<SignInPage> {
  final _emailController = TextEditingController();
  final _passwordController = TextEditingController();
  final _authService = AuthService();
  bool _isLoading = false;
  String? _errorMessage;
  @override
  Widget build(BuildContext context) {
    return Scaffold(































      appBar: AppBar(title: const Text('Sign In')),
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
            TextFormField(
              controller: _emailController,
              decoration: const InputDecoration(labelText: 'Email'),
            ),
            TextFormField(
              controller: _passwordController,
              decoration: const InputDecoration(labelText: 'Password'),
              obscureText: true,
            ),
            const SizedBox(height: 20),
            ElevatedButton(
              onPressed: () async {
                setState(() {
                  _isLoading = true;
                  _loadUrl();
                });
              },

          ),
          ),
          Expanded(
            child: WebView(
              initialUrl: 'about:blank', // Start with a blank page
              javascriptMode: JavascriptMode.unrestricted,
              onWebViewCreated: (WebViewController webViewController) {
                _webViewController = webViewController;
              },
            ),
          ),

        ],
      ),
    );
  }

  void _loadUrl() {
    if (searchText.startsWith('http://') || searchText.startsWith('https://')) {
      // Load the URL directly
      _webViewController?.loadUrl(searchText);
    } else {
      // Redirect to search engine
      _redirectToSearchEngine(searchText, _selectedSearchEngine);
    }
  }

  void _redirectToSearchEngine(String searchText, String searchEngine) {
    String url = SearchEngineHelper.getSearchUrl(searchText, searchEngine);
    _webViewController?.loadUrl(url);
  }
}

