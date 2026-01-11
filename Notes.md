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


## 🔁 Reducers — Short Summary

A **reducer** is a **pure function** that determines how an application’s **state changes** in response to an **action**.

> **(state, action) → newState**

---

### ❓ Why reducers are used
- Centralize and organize **state logic**
- Make state updates **predictable and traceable**
- Handle **complex or related state changes**
- Improve **maintainability and scalability** in larger apps

---

### ⚙️ Key characteristics
- Does **not mutate** the existing state
- Always returns a **new state object**
- Contains **no side effects** (no API calls, timers, or randomness)

---

### 📍 Where reducers are used
- `useReducer` hook in React
- Redux / Redux Toolkit
- With Context API for global state management

---

