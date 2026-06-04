# User Management Dashboard

A modern User Management Dashboard built with React, TypeScript, Tailwind CSS, and Vite. The application fetches user data from an external API and provides features for searching, sorting, filtering, pagination, and viewing detailed user information.

## Features

* Fetch user data from REST API
* Search users by name, username, or email
* Sort users by name, username, or email
* Filter users by city and company
* Pagination for improved navigation
* Detailed user profile page
* Responsive dashboard layout
* Modern UI with Tailwind CSS
* Performance optimization using React Hooks

## Technologies Used

* React
* TypeScript
* Vite
* Tailwind CSS
* React Router DOM
* React Icons

## Project Structure

```text
src/
├── components/
│   ├── Navbar.tsx
│   ├── Sidebar.tsx
│   ├── SearchBar.tsx
│   ├── SortControls.tsx
│   ├── FilterControls.tsx
│   ├── Pagination.tsx
│   ├── StatsCards.tsx
│   └── UserCard.tsx
│
├── pages/
│   ├── UserList.tsx
│   └── UserDetail.tsx
│
├── routes/
│   └── AppRoutes.tsx
│
├── services/
│   └── UserServices.ts
│
├── types/
│   └── User.ts
│
├── App.tsx
└── main.tsx
```

## Installation

Clone the repository:

```bash
git clone <https://github.com/AnnEldho/Project.git>
```

Navigate to the project directory:

```bash
cd UserDashboard
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## API Source

User data is fetched from:

https://jsonplaceholder.typicode.com/users

## Performance Optimizations

* useMemo for filtering and sorting operations
* Component-based architecture
* Efficient state management with React Hooks
* Client-side pagination

## Future Enhancements

* Dark Mode
* Debounced Search
* React.memo optimization
* User editing functionality
* Authentication and authorization

