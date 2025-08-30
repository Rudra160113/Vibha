import 'package:permission_handler/permission_handler.dart';

class PermissionService {
  static Future<bool> requestCameraPermission() async {
    var status = await Permission.camera.status;
    if (status.isGranted) {
      return true;
    } else {
      var result = await Permission.camera.request();
      return result.isGranted;
    }
  }

  static Future<bool> requestMicrophonePermission() async {
    var status = await Permission.microphone.status;
    if (status.isGranted) {
      return true;
    } else {
      var result = await Permission.microphone.request();
      return result.isGranted;
    }
  }

  static Future<bool> requestMediaPermission() async {
    var status = await Permission.photos.status;  // or Permission.storage for older versions
    if (status.isGranted) {
      return true;
    } else {
      var result = await Permission.photos.request(); // or Permission.storage.request()
      return result.isGranted;
    }
  }

  static Future<bool> requestNotificationPermission() async {
    var status = await Permission.notification.status;
    if (status.isGranted) {
      return true;
    } else {
      var result = await Permission.notification.request();
      return result.isGranted;
    }
  }

  static Future<Map<String, bool>> requestAllPermissions() async {
    return {
      'camera': await requestCameraPermission(),
      'microphone': await requestMicrophonePermission(),
      'media': await requestMediaPermission(),
      'notification': await requestNotificationPermission(),
    };
  }
}
