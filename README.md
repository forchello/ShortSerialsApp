## README.md для проекту Short Serials

# Short Serials

Цей проект є мобільним додатком для перегляду коротких серіалів, розробленим на React Native. У проекті використовується Firebase для отримання Remote Config

## Встановлення

### Попередні вимоги

- Node.js ( 18+ )
- npm або yarn
- Xcode (для iOS розробки)
- Android Studio (для Android розробки)
- `react-native-cli` встановлений глобально

### Кроки для встановлення

1. Клонування репозиторію

   ```sh
   git clone https://github.com/forchello/ShortSerialsApp.git
   cd ShortSerialsApp
   ```

2. Встановлення залежностей

   Використовуйте npm або yarn для встановлення всіх залежностей проекту:

   ```sh
   npm install
   # або
   yarn install
   ```

3. Налаштування Firebase

   Вам потрібно додати конфігураційні файли Firebase, які не включені в репозиторій через `.gitignore`.

   - Для iOS:
     - Отримайте файл `GoogleService-Info.plist` з Firebase консолі.
     - Додайте файл до папки `ios` проекту:

       ```sh
       /ios/GoogleService-Info.plist
       ```

   - Для Android:
     - Отримайте файл `google-services.json` з Firebase консолі.
     - Додайте файл до папки `android/app` проекту:

       ```sh
       /android/app/google-services.json
       ```

4. Переконайтеся, що ідентифікатори додатків збігаються

   Перевірте, що ідентифікатори додатків у конфігураційних файлах збігаються з налаштуваннями проекту:

   - Для iOS: ідентифікатор має бути `com.shortserialsapp`.
   - Для Android: ідентифікатор має бути `app.shortserialsapp`.

### Запуск проекту

1. Запуск на iOS

   ```sh
   npx react-native run-ios
   ```

2. Запуск на Android

   ```sh
   npx react-native run-android
   ```

### Додаткова інформація

- Якщо у вас виникають проблеми з налаштуванням проекту, перевірте документацію [React Native](https://reactnative.dev/docs/getting-started) для отримання додаткових інструкцій.
- Переконайтеся, що у вас встановлені всі необхідні залежності та інструменти для розробки як на iOS, так і на Android.

## Структура проекту

- `/android` - Папка з Android проектом.
- `/ios` - Папка з iOS проектом.
- `/app` - Папка з вихідним кодом React Native додатку.
