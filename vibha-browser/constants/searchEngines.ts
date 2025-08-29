export const searchEngines: Record<string, (q: string) => string> = {
      google: (q) => `https://google.com/search?q=${q}`,
        bing: (q) => `https://bing.com/search?q=${q}`,
          yandex: (q) => `https://yandex.com/search/?text=${q}`,
            yahoo: (q) => `https://search.yahoo.com/search?p=${q}`,
              brave: (q) => `https://search.brave.com/search?q=${q}`,
                baidu: (q) => `https://www.baidu.com/s?wd=${q}`,
                };
