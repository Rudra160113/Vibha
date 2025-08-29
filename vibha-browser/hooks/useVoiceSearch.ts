import * as Speech from "expo-speech";
import * as SpeechRecognition from "expo-speech"; // placeholder (Expo doesn’t have native recognition yet)

export function useVoiceSearch() {
  function startListening(onResult: (text: string) => void) {
      // ⚠️ Note: Real-time STT requires a 3rd party API like Google Speech or Whisper
          // Placeholder for now: simulate result
              setTimeout(() => onResult("about WHO"), 2000);
                }

                  function speak(text: string) {
                      Speech.speak(text);
                        }

                          return { startListening, speak };
                          }
                          