# User Management Dashboard

A modern and responsive User Management Dashboard built using **React**, **TypeScript**, **Tailwind CSS**, **Vite**, and **Axios**. The application fetches user data from an external API and provides advanced features such as searching, sorting, filtering, pagination, dark mode, favorites, CSV export, and detailed user profiles.

---

## Features

* Fetch user data from REST API using Axios
* Search users by name, username, or email
* Debounced Search for improved performance
* Sort users by name, username, or email
* Filter users by city and company
* Reset Filters functionality
* Pagination for efficient navigation
* Detailed User Profile Page
* Responsive Design (Mobile, Tablet, Desktop)
* Dark Mode with theme persistence
* Favorites Feature
* CSV Export Feature
* Loading Skeletons
* Error Handling
* Search Results Counter
* Lazy Loading using React.lazy and Suspense
* Modern UI with Tailwind CSS
* Unit Testing using Jest and React Testing Library

---

## Technologies Used

* React
* TypeScript
* Vite
* Tailwind CSS
* Axios
* React Router DOM
* React Icons
* Jest
* React Testing Library

---

## API Source

User data is fetched from:

https://jsonplaceholder.typicode.com/users

---

## Project Structure

```text
PROJECT/
│
├── README.md
│
└── UserDashboard/
    │
    ├── public/
    │
    ├── screenshots/
    │   ├── dashboard-light.png
    │   ├── dashboard-dark.png
    │   ├── user-detail.png
    │   ├── favorites.png
    │   └── filter.png
    │
    ├── src/
    │   ├── components/
    │   │   ├── Navbar.tsx
    │   │   ├── Sidebar.tsx
    │   │   ├── SearchBar.tsx
    │   │   ├── SortControls.tsx
    │   │   ├── FilterControls.tsx
    │   │   ├── StatsCards.tsx
    │   │   ├── UserCard.tsx
    │   │   └── Pagination.tsx
    │   │
    │   ├── pages/
    │   │   ├── UserList.tsx
    │   │   └── UserDetail.tsx
    │   │
    │   ├── routes/
    │   │   └── AppRoutes.tsx
    │   │
    │   ├── services/
    │   │   └── UserServices.ts
    │   │
    │   ├── tests/
    │   │   ├── UserCard.test.tsx
    │   │   ├── StatsCards.test.tsx
    │   │   └── SearchBar.test.tsx
    │   │
    │   ├── types/
    │   │   └── User.ts
    │   │
    │   ├── setupTests.ts
    │   ├── App.tsx
    │   └── main.tsx
    │
    ├── package.json
    ├── package-lock.json
    ├── jest.config.cjs
    ├── tsconfig.json
    ├── tsconfig.app.json
    ├── tsconfig.node.json
    ├── tsconfig.test.json
    ├── vite.config.ts
    └── eslint.config.js
```

---

## Screenshots

### Dashboard - Light Mode

![Dashboard Light](./UserDashboard/screenshots/dashboard-light.png)

### Dashboard - Dark Mode

![Dashboard Dark](./UserDashboard/screenshots/dashboard-dark.png)

### User Detail Page

![User Detail](./UserDashboard/screenshots/user-detail.png)

### Favorites Feature

![Favorites](./UserDashboard/screenshots/favorites.png)

### Search and Filter

![Search Filter](./UserDashboard/screenshots/filter.png)

---

## Installation

### Clone the Repository

```bash
git clone https://github.com/AnnEldho/Project.git
```

### Navigate to Project Directory

```bash
cd UserDashboard
```

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## Testing

Run tests using:

```bash
npm test
```

### Implemented Test Cases

* UserCard Component
* StatsCards Component
* SearchBar Component

---

## Performance Optimizations

* Debounced Search using useEffect
* Memoization using useMemo
* Lazy Loading using React.lazy and Suspense
* Efficient State Management with React Hooks
* Client-side Pagination

---

## Bonus Features

* Dark Mode
* Favorites Feature
* CSV Export
* Unit Testing
* Responsive UI

---

## Future Enhancements

* User Editing Functionality
* Authentication and Authorization
* Charts and Analytics Dashboard
* Backend Integration
* Role-Based Access Control

---

## Author

**Ann Mary Eldho**

Built as part of a React + TypeScript User Management Dashboard Assessment.
