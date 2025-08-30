class SearchEngineHelper {
  static String getSearchUrl(String searchText, String searchEngine) {
    String url;
    switch (searchEngine.toLowerCase()) {
      case 'google':
        url = 'https://www.google.com/search?q=$searchText';
        break;
      case 'yahoo':
        url = 'https://search.yahoo.com/search?p=$searchText';
        break;
      case 'duckduckgo':
        url = 'https://duckduckgo.com/?q=$searchText';
        break;
      case 'baidu':
        url = 'https://www.baidu.com/s?wd=$searchText';
        break;
      case 'yandex':
        url = 'https://yandex.com/search/?text=$searchText';
        break;
      case 'brave':
        url = 'https://search.brave.com/search?q=$searchText';
        break;
      case 'bing':
        url = 'https://www.bing.com/search?q=$searchText';
        break;
      default:
        url = 'https://www.google.com/search?q=$searchText';
        break;
    }
    return url;
  }
}