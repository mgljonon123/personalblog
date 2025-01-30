import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Signin1page from "./components/auth/signin1/signin1page";
import BlogPage from "./components/components/blog/BlogPage";
import SocialFeed from "./components/Social/socialFeed/SocialFeed";
import InterestsPage from "./components/tagnuud/interests/InterestsPage";
import CreateAccount from "./components/auth/createaccount/CreateAccount";
import SidebarNavigation from "./SidebarNavigation";
import ProfilePage from "./pages/ProfilePage";
import Friends1 from "./components/friends/friends1";
import Friends2 from "./components/friends/friends2";
import Friends3 from "./components/friends/friends3";
import Friends4 from "./components/friends/friends4";
import PrivacySettings from "./components/editprofile/privacy/PrivacySettings";
import Notification from "./components/notification/notification";
import Post2 from "./components/post/post2";
import Profile from "./components/editprofile/mainprofile/profile";
import SettingsPage from "./components/pass/settings/SettingsPage";
import LibraryLayout from "./components/Library1/library/LibraryLayout";
import { Library } from "./components/library2/Library";
import SearchPage from "./components/search/SearchPage";
import { PostCarddefault } from "./components/Social/socialFeed/posts/PostCarddefault";
import { BlogPost } from "./components/blog/components/BlogPost";

function App() {
  return (
    <Routes>
      <Route path="/" element={<BlogPage />} />
      <Route path="/SidebarNavigation" element={<SidebarNavigation />} />
      <Route path="/signin1page" element={<Signin1page />} />
      <Route path="/SocialFeed" element={<SocialFeed />} />
      <Route path="/InterestPage" element={<InterestsPage />} />
      <Route path="/CreateAccount" element={<CreateAccount />} />
      <Route path="/ProfilePage" element={<ProfilePage />} />
      <Route path="/Friends1" element={<Friends1 />} />
      <Route path="/Friends2" element={<Friends2 />} />
      <Route path="/Friends3" element={<Friends3 />} />
      <Route path="/Friends4" element={<Friends4 />} />
      <Route path="/PrivacySettings" element={<PrivacySettings />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/SettingsPage" element={<SettingsPage />} />
      <Route path="/Library2" element={<Library />} />
      <Route path="/SearchPage" element={<SearchPage></SearchPage>} />
      <Route path="/BlogPost" element={<BlogPost></BlogPost>} />

      <Route
        path="/Notification"
        element={<Notification></Notification>}
      ></Route>
      <Route path="/Post2" element={<Post2></Post2>}></Route>
      <Route path="/Library" element={<LibraryLayout></LibraryLayout>}></Route>

      {/* <Route path="/NavigationMenu" element={<NavigationMenu />} /> */}
    </Routes>
  );
}

export default App;
