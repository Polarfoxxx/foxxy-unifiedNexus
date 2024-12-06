module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js"],
  theme: {
    extend: {
      fontFamily: {
        anta: ['Anta', 'sans-serif'],      // Pridajte písmo Anta
        oswald: ['Oswald', 'sans-serif'],
        libre: ['Libre Baskerville', 'sans-serif'],
        dancing: ['"Dancing Script"', 'cursive'],

      },
      boxShadow: {
        'miniApp': '1px 0px 39px -20px rgba(0,0,0,0.75) inset',
        'minContent': '0px 0px 30px -10px rgba(0,0,0,0.75) inset',
        "itemShadow": "3px 7px 6px -1px rgba(0, 0, 0, 0.1)",
      },
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        'fullNewEvent': '1000px',
        "fullApp": "100vw",
      },

      backgroundImage: {
        'loginBackg': "url('/public/image/loginimg.jpg')",
        'background_App': "var(--background_App)",
      },
      colors: {
        thems: {
          //! appBackGround.....................
          background_content: "var(--background_content)",
          parentComponentBackg: "var(--parentComponentBackg)",
          parentComponentBorder: "var(--parentComponentBorder)",
          appThemeColor: "var(--appThemeColor)",
          appThemeColorSecondary: "var(--appThemeColorSecondary)",
          appThemeColorTertiary: "var(--appThemeColorTertiary)",
          appThemeColorFourth: "var(--appThemeColorFourth)",
          //! textColor........................
          defaultTextColor: 'var(--defaultTextColor)',
          defaultTextColorSec: 'var(--defaultTextColorSec)',
          defaultTextColorThree: "var(--defaultTextColorThree)",
          current_day: "var(--current_day)",
          //! inputStyle........................
          inputBorder: "var(--inputBorder)",
          placeholderColor: "var(--placeholderColor)",
          //! buttonStyle.......................
          background_button: 'var(--background_button)',
          color_button: 'var(--color_button)',
          background_button_hover: "var(--background_button_hover)",
          miniNavigationButton: "var(--miniNavigationButton)",


          /* -------------------------- */
          //! Calendar........................
          eventBackground_selected: "var(--eventBackground_selected)",
          current_time_line: "var(--current_time_line)",
          InvalidDay_Background: "var(--InvalidDay_Background)",
          currentDayBlock: "var(--currentDayBlock)",
          allEventOpossiteBackground: "var(--allEventOpossiteBackground)",
          //! littleComponent.................
          littleComponent_Background: "var(--littleComponent_Background)",
          littleComponent_border: "var(--littleComponent_border)",
          littleComponent_oppositeColor: "var(--littleComponent_oppositeColor)",
          //! Message.........................
          messageContent_background: "var(--messageContent_background)",
          newMessageForm_Background: "var(--newMessageForm_Background)",
          itemHeader_Background: "var(--itemHeader_Background)",
          item_Background: "var(--item_Background)",
          //! Weather.........................
          weatherTemperatureGraph_Warm: "var(--weatherTemperatureGraph_Warm)",
          weatherTemperatureGraph_Cool: "var(--weatherTemperatureGraph_Cool)",
          weatherFeelsLikeGraph_Warm: "var(--weatherFeelsLikeGraph_Warm)",
          weatherFeelsLikeGraph_Cool: "var(--weatherFeelsLikeGraph_Cool)",
          weatherGlobalGraphLine: "var(--weatherPressureLine)",
        },
      },
    },
  },
  plugins: [],
}
