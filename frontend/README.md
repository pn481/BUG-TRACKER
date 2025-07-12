A full-stack bug tracker application built with MongoDB, Express.js, React.js, and Node.js. Includes full testing (Jest, Supertest, Testing Library) and debugging tools.


## 🚀 Features
- Report bugs with title and description
- View all bugs
- Update bug status (open, in-progress, resolved)
- Delete bugs
- Backend and frontend tests
- Debugging with DevTools and Node inspector

---

## 🛠 Installation

```bash
# Backend setup
cd backend
npm install

# Frontend setup
cd ../frontend
npm install
```


## ▶️ Running the Application

```bash
# Backend
cd backend
npm run dev

# Frontend
cd frontend
npm run dev
```

Make sure MongoDB is running and `.env` file has:
```
MONGO_URI=mongodb://localhost:27017/bugtracker
```

## ✅ Running Tests

```bash
# Backend tests
cd backend
npm test

# Frontend tests
cd frontend
npm test