## Nebula-dotcom Development Logs

### Version 0.0
- Set up Vite for the project
- Set up Git

### Version 0.1
- Loaded Dependencies (react redux-toolkit appwrite hook-form)
- Updated README.md
- Removed Assets
- Checked App.jsx for operation
- Made Logs.md

### Version 0.2
- Created Appwrite Project
- Loaded Appwrite Database Collection and Bucket
- Properties added to .env
- Configurations done in config.js

### Version 0.3
- Built Authentication Services (create login get logout)
- Services assigned in auth.js

### Version 0.4
- Built Configuration Services (create update delete for post and file)
- Services assigned in conf.js

### Version 0.5
- Configured React-Redux Toolkit
- Created store in store.js passing the reducers
- Configured slices for the auth with login and logout
- Created components of Header and Footer for test purposes
- Exporting done in ./src/components/index.js
- Configured states and dispatches (useState, useEffect and useDispatch)
- Created dummy page for test (working)
- Configured Tailwind CSS
- Tailwind CSS setup and tests (working)
- Did Provider wrap in main.jsx
- Small correction done in ./src/appwrite/auth.js

### Version 0.6
- Created React components (Logo.jsx Input.jsx Button.jsx)
- Updated Footer and Header with index.js

### Version 0.7
- Created custom Select and Card components (Select.jsx  Postcard.jsx)
- Created custom Sign Up and Sign In components (Signup.jsx  Login.jsx)
- Set the authentication layout (Authlayout.jsx)
- Added components for ./src/components/index.js

### Version 0.8
- Created the Real-Time Text Editor platform component (Realtimeeditor.jsx)
- Created the Postform component (Postform.jsx)
- Operated on Slugs and their transformations

### Version 0.9
- Created pages for Home, Posts and Authentication ./src/pages
- Minor code changes

### Version 0.10
- Bug Fixes for the following <-------->
- Routes pages not import for ./src/main.jsx (fixed)
- Outlet not rendered for ./src/App.jsx (fixed)
- ID.Unique function call not done ./src/appwrite/auth.js (fixed)
- Status Title Content UserID and FeaturedImage variables cases were mismatched ./src/appwrite/conf.js (fixed) ---- !!Big Issue!!
- Logout button functionality not done ./src/components/header/LogoutButton.jsx (fixed)
- Variable rendered name fixed in ./src/components/post-form/Postform.jsx (fixed)
- Id not called in ./src/components/Input.jsx
- Wrong path of service call ./src/components/Postcard.jsx
- Real Time Editor needed API Key from website ./src/components/Realtimeeditor.jsx (fixed)
- Signup routing mistake at ./src/components/Signup.jsx (fixed)
- Postcard item not spread with issues at ./src/pages/Allposts.jsx (fixed)
- authSlice not called at ./src/store/store.jsx (fixed)
- Variable name selection for ./src/pages/Post.jsx (fixed)
- Fixes for UI and other things <--------->
- For issue on Sign-up and Log-in pixel flow (to fix)

### Version 0.11

- Lots of changes and fixes in UI
- Deep changes in the design and responsiveness for mobile layouts
- Components design changes
- Changes in ./src/components and ./src/pages and ./src/App.jsx
- Layout change in index.html
- New logo in ./src/assets and /public

### Version 1.0 (DEPLOYMENT)
- Deployed on vercel
- Link here [here](https://nebula-4u6aycyc8-anurag-bhattacharjees-projects.vercel.app/) or [here](https://nebula-coral-phi.vercel.app/)
- Readme Final Form

### Version 1.1
- Changes in Home Page when logged out.
- Slight changes in fonts and styles.
- Changes in header.
- Footer fully changed (link not given right now).
- Changes to font styles in Header, Posts Title and Content and Display.
- Caution Text on AddPost so that the render bug feature is handled by users.
- BETA TAG has been uplifted.