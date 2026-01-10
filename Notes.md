### 📌 React Context API 

**1️⃣ What is Context API?**  
Context API is used to share data globally in a React application without passing props at every level (avoids prop drilling).

**2️⃣ Why we use it?**  
- Avoid prop drilling  
- Centralized state access  
- Cleaner and scalable code  

**3️⃣ Common Use Cases (Industry)**  
- Authentication (user, token)  
- Theme (dark/light mode)  
- Language (i18n)  
- App settings  
- Small–medium global state  

**4️⃣ Main Parts of Context API**  
1. createContext() → creates context  
2. Provider → supplies data  
3. useContext() → consumes data  

**5️⃣ Basic Syntax**
```js