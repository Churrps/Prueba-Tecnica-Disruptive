import Header from './header'
import Footer from './footer'
import Home from '../pages/home'
import Contact from '../pages/contact'
import TopicBrowse from '../pages/topicbrowse'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

export default function Router() {
    const Layout = () => {
        return (
            <>
            <Header />
            <div className="content"><Outlet /></div>
            <Footer />
            </>
        )
    }

    const BrowserRoutes = () => {
        return (
            <BrowserRouter>
                <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="contact-us" element={<Contact />} />
                    <Route path="topic" element={<TopicBrowse />} />
                    <Route path="topic/:id" element={<TopicBrowse />} />
                </Route>
                </Routes>
            </BrowserRouter>
        )
    }

    return (
        <BrowserRoutes />
    )
}