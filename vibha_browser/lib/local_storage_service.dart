import 'package:shared_preferences/shared_preferences.dart';

class LocalStorageService {
  static late SharedPreferences _prefs;

  static Future<void> initialize() async {
    _prefs = await SharedPreferences.getInstance();
  }

  // Save data to local storage
  static Future<bool> saveData(String key, dynamic value) async {
    if (value is String) {
      return await _prefs.setString(key, value);
    } else if (value is int) {
      return await _prefs.setInt(key, value);
    } else if (value is double) {
      return await _prefs.setDouble(key, value);
    } else if (value is bool) {
      return await _prefs.setBool(key, value);
    } else if (value is List<String>) {
      return await _prefs.setStringList(key, value);
    } else {
      // Handle other data types as needed
      return false;
    }
  }

  // Retrieve data from local storage
  static dynamic getData(String key) {
    return _prefs.get(key);
  }

  // Remove data from local storage
  static Future<bool> removeData(String key) async {
    return await _prefs.remove(key);
  }

  // Clear all data from local storage
  static Future<bool> clearAllData() async {
    return await _prefs.clear();
  }
}
