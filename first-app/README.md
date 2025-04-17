
# 🚀 Angular First App

This is a simple Angular 16 project created as a first app using official documentation. It uses a mock backend powered by `json-server`.

## 📦 Tech Stack

- 🅰️ Angular 16  
- 🟢 Node.js v18.10.0  
- 🗄️ JSON Server for mock API  

---

## 🛠️ Getting Started

Follow the steps below to run the project locally:

### 1. 🔧 Install Dependencies

Make sure you have Node.js and Angular CLI installed:

```bash
node -v         # Should show v18.10.0
npm install -g @angular/cli
```

Install project dependencies:

```bash
cd first-app
npm install
```

---

### 2. 🗃️ Start JSON Server

Start the mock backend server (make sure `db.json` is present in root):

```bash
json-server --watch db.json --port=8000
```

> 📌 This should be running **before** starting the Angular app.

---

### 3. 🚦 Run Angular App

Now serve the Angular app from the `first-app` directory:

```bash
ng serve
```

The app will be available at:

```
http://localhost:4200
```

---

## ✅ Done!

You’re all set! Open the browser and start exploring your first Angular app 🎉

---

## 📁 Project Structure

```
📦 first-app/
┣ 📄 angular.json
┣ 📄 package.json
┣ 📁 src/
┃ ┣ 📄 app/
┃ ┗ ...
┣ 📄 db.json  <-- Mock backend data
```

---

## 🙌 Credits

Based on the official Angular documentation with enhancements for learning and practice.


