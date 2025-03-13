import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PrivateRouteAdmin from "./Components/PrivateRoute/PrivateRouteAdmin";
import PrivateRouteModo from "./Components/PrivateRoute/PrivateRouteModo";
import PrivateRouteVisitor from "./Components/PrivateRoute/PrivateRouteVisitor";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/General/HomePage";
import EventPage from "./Pages/Event/EventPage";
import EventBackPage from "./Pages/Back/Event/EventBackPage";
import EventFormPage from "./Pages/Event/EventFormPage";
import EventUpdatePage from "./Pages/Event/EventUpdatePage";
import PhotoPage from "./Pages/Photo/PhotoPage";
import BackPhotoPage from "./Pages/Back/Photo/BackPhotoPage";
import ShopPage from "./Pages/Shop/ShopPage";
import ShopUpdatePage from "./Pages/Shop/ShopUpdatePage";
import TicketPage from "./Pages/Ticket/TicketPage";
import LogPage from "./Pages/Log/LogPage";
import Signup from "./Pages/Log/Signup/Signup";
import Connection from "./Pages/Log/Connection/Connection";
import ActivityPage from "./Pages/Activity/ActivityPage";
import ActivityBackPage from "./Pages/Back/Activity/ActivityBackPage";
import CreateActivityPage from "./Pages/Activity/CreateActivityPage";
import PhotoUpdate from "./Pages/Photo/PhotoUpdate";
import LegalNoticePage from "./Pages/General/LegalNotice";
import PrivacyPolicyPage from "./Pages/General/PrivacyPolicyPage";
import CreateTicketPage from "./Pages/Ticket/CreateTicketPage";
import SingleTicketPage from "./Pages/Ticket/SingleTicketPage";
import CreateMessageTicketPage from "./Pages/MessageTicket/CreateMessageTicketPage";
import MessageTicketPage from "./Pages/MessageTicket/MessageTicketPage";
import Account from "./Pages/Log/Account/Account";
import NotFound from "./Pages/General/NotFound/NotFound";
import RoleManagementPage from "./Pages/Back/RoleManagement/RoleManagementPage";
import BackTicketReadAllPage from "./Pages/Back/Ticket/BackTicketReadAllPage";
import BackTicketSinglePage from "./Pages/Back/Ticket/BackTicketSinglePage";
import RoleManagementFilterAdminPage from "./Pages/Back/RoleManagement/Filter/RoleManagementFilterAdminPage";
import RoleManagementFilterModoPage from "./Pages/Back/RoleManagement/Filter/RoleManagementFilterModoPage";
import RoleManagementFilterAdherentPage from "./Pages/Back/RoleManagement/Filter/RoleManagementFilterAdherentPage";
import RoleManagementFilterVisitorPage from "./Pages/Back/RoleManagement/Filter/RoleManagementFilterVisitorPage";
import RoleManagementUpdatePage from "./Pages/Back/RoleManagement/RoleManagementUpdatePage";
import LogUpdatePage from "./Pages/Log/LogUpdatePage";
import HomePageBack from "./Pages/Back/General/HomePageBack";
import PhotoCreate from "./Pages/Photo/PhotoCreate";
import ShopBackPage from "./Pages/Back/Shop/ShopBackPage";
import ShopFormPage from "./Pages/Shop/ShopFormPage";
import UpdateActivityPage from "./Pages/Activity/UpdateActivityPage";
import NotFoundAlreadyLog from "./Pages/General/NotFound/NotFoundAlreadyLog";
import BackLogPage from "./Pages/Back/Log/BackLogPage";
import BackLogPageFilterAdmin from "./Pages/Back/Log/Filter/BackLogPageFilterAdmin";
import BackLogPageFilterModo from "./Pages/Back/Log/Filter/BackLogPageFilterModo";
import BackLogPageFilterAdherent from "./Pages/Back/Log/Filter/BackLogPageFilterAdherent";
import BackLogPageFilterVisitor from "./Pages/Back/Log/Filter/BackLogPageFilterVisitor";
import LogUpdateAdminPage from "./Pages/Log/LogUpdateAdminPage";
import ReadOneShopPage from "./Pages/Shop/ReadOneShopPage";
import NotFoundNotLog from "./Pages/General/NotFound/NotFoundNotLog";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/log"} element={<LogPage />} /> {/* Log page */}
        <Route path={"/log/signup"} element={<Signup />} /> {/* Signup page */}
        <Route path={"/log/connection"} element={<Connection />} /> {/* Connection page */}

        <Route path={"/not-found-already-log"} element={<NotFoundAlreadyLog />} /> {/* Already log page */}
        <Route path={"/not-found-not-log"} element={<NotFoundNotLog />} /> {/* Not log page */}

        <Route path="/" element={<PrivateRouteVisitor />}>
          <Route index element={<HomePage />} />
        </Route>

        <Route path="/account" element={<PrivateRouteVisitor />}> {/* Account page */}
          <Route index element={<Account />} />
        </Route>
        <Route path="/log/update/:id" element={<PrivateRouteVisitor />}> {/* Log update page */}
          <Route index element={<LogUpdatePage />} />
        </Route>
        <Route path="/log/update/admin/:id" element={<PrivateRouteAdmin />}> {/* Log update page for the admin interface */}
          <Route index element={<LogUpdateAdminPage />} />
        </Route>
        <Route path="/log/read-all" element={<PrivateRouteAdmin />}> {/* Log read all page */}
          <Route index element={<BackLogPage />} />
        </Route>
        <Route path="/log/read-all/admin" element={<PrivateRouteAdmin />}> {/* Log read all page with the filter admin */}
          <Route index element={<BackLogPageFilterAdmin />} />
        </Route>
        <Route path="/log/read-all/modo" element={<PrivateRouteAdmin />}> {/* Log read all page with the filter modo */}
          <Route index element={<BackLogPageFilterModo />} />
        </Route>
        <Route path="/log/read-all/adherent" element={<PrivateRouteAdmin />}> {/* Log read all page with the filter adherent */}
          <Route index element={<BackLogPageFilterAdherent />} />
        </Route>
        <Route path="/log/read-all/visitor" element={<PrivateRouteAdmin />}> {/* Log read all page with the filter visitor */}
          <Route index element={<BackLogPageFilterVisitor />} />
        </Route>

        <Route path="/role-management" element={<PrivateRouteAdmin />}> {/* Role management page */}
          <Route index element={<RoleManagementPage />} />
        </Route>
        <Route path="/role-management/role-admin" element={<PrivateRouteAdmin />}> {/* Role management page with the filter admin */}
          <Route index element={<RoleManagementFilterAdminPage />} />
        </Route>
        <Route path="/role-management/role-modo" element={<PrivateRouteAdmin />}> {/* Role management page with the filter modo */}
          <Route index element={<RoleManagementFilterModoPage />} />
        </Route>
        <Route path="/role-management/role-adherent" element={<PrivateRouteAdmin />}> {/* Role management page with the filter adherent */}
          <Route index element={<RoleManagementFilterAdherentPage />} />
        </Route>
        <Route path="/role-management/role-visitor" element={<PrivateRouteAdmin />}> {/* Role management page with the filter visitor */}
          <Route index element={<RoleManagementFilterVisitorPage />} />
        </Route>
        <Route path="/role-management/update/:id" element={<PrivateRouteAdmin />}> {/* Role management update page */}
          <Route index element={<RoleManagementUpdatePage />} />
        </Route>

        <Route path="/back" element={<PrivateRouteModo />}>
          <Route index element={<HomePageBack />} />
        </Route>

        <Route path="/event" element={<PrivateRouteVisitor />}>
          <Route index element={<EventPage />} />
        </Route>
        <Route path="/event/back" element={<PrivateRouteModo />}>
          <Route index element={<EventBackPage />} />
        </Route>
        <Route path="/event/back/form" element={<PrivateRouteModo />}>
          <Route index element={<EventFormPage />} />
        </Route>
        <Route path="/event/back/update/:id" element={<PrivateRouteModo />}>
          <Route index element={<EventUpdatePage />} />
        </Route>

        <Route path={"/event/back/update/:id"} element={<EventFormPage />} />
        <Route path={"/event/read/:id"} element={<EventFormPage />} />

        <Route path="/photo" element={<PrivateRouteVisitor />}>
          <Route index element={<PhotoPage />} />
        </Route>
        <Route path="/backphoto" element={<PrivateRouteModo />}>
          <Route index element={<BackPhotoPage />} />
        </Route>
        <Route path="/backphoto/:id" element={<PrivateRouteModo />}>
          <Route index element={<BackPhotoPage />} />
        </Route>
        <Route path="/photo/update/:id" element={<PrivateRouteModo />}>
          <Route index element={<PhotoUpdate />} />
        </Route>
        <Route path="/photo/create" element={<PrivateRouteModo />}>
          <Route index element={<PhotoCreate />} />
        </Route>

        <Route path="/shop" element={<PrivateRouteVisitor />}>
          <Route index element={<ShopPage />} />
        </Route>
        <Route path="/shop/read/:id" element={<PrivateRouteVisitor />}>
          <Route index element={<ReadOneShopPage />} />
        </Route>
        <Route path="/shop/back" element={<PrivateRouteModo />}>
          <Route index element={<ShopBackPage />} />
        </Route>
        <Route path="/shop/back/form" element={<PrivateRouteModo />}>
          <Route index element={<ShopFormPage />} />
        </Route>
        <Route path="/shop/back/update/:id" element={<PrivateRouteModo />}>
          <Route index element={<ShopUpdatePage />} />
        </Route>

        <Route path="/ticket" element={<PrivateRouteVisitor />}>
          <Route index element={<TicketPage />} />
        </Route>
        <Route path="/ticket/read/:id" element={<PrivateRouteVisitor />}>
          <Route index element={<SingleTicketPage />} />
        </Route>
        <Route path="/ticket/create" element={<PrivateRouteVisitor />}>
          <Route index element={<CreateTicketPage />} />
        </Route>
        <Route path="/ticket/update/:id" element={<PrivateRouteVisitor />}>
          <Route index element={<CreateTicketPage />} />
        </Route>
        <Route path="/ticket/:ticketId/message" element={<PrivateRouteVisitor />}>
          <Route index element={<MessageTicketPage />} />
        </Route>
        <Route path="/ticket/:ticketId/create" element={<PrivateRouteModo />}>
          <Route index element={<CreateMessageTicketPage />} />
        </Route>
        <Route path="/ticket/:ticketId/message/update/:messageId" element={<PrivateRouteModo />}>
          <Route index element={<CreateMessageTicketPage />} />
        </Route>
        <Route path="/back/ticket" element={<PrivateRouteModo />}>
          <Route index element={<BackTicketReadAllPage />} />
        </Route>
        <Route path="/back/ticket/read/:id/:back" element={<PrivateRouteModo />}>
          <Route index element={<BackTicketSinglePage />} />
        </Route>

        <Route path="/back/update/ticket/:id/:back" element={<PrivateRouteModo />}>
          <Route index element={<CreateTicketPage />} />
        </Route>

        <Route path="/activity" element={<PrivateRouteVisitor />}>
          <Route index element={<ActivityPage />} />
        </Route>
        <Route path="/back/activity" element={<PrivateRouteVisitor />}>
          <Route index element={<ActivityBackPage />} />
        </Route>
        <Route path="/create/activity" element={<PrivateRouteModo />}>
          <Route index element={<CreateActivityPage />} />
        </Route>
        <Route path="/update/activity/:id" element={<PrivateRouteModo />}>
          <Route index element={<UpdateActivityPage />} />
        </Route>

        <Route path="/legalnotice" element={<PrivateRouteVisitor />}>
          <Route index element={<LegalNoticePage />} />
        </Route>
        <Route path="/privacypolicy" element={<PrivateRouteVisitor />}>
          <Route index element={<PrivacyPolicyPage />} />
        </Route>

        <Route path={"/*"} element={<NotFound />} /> {/* 404 page */}
      </Routes>
    </BrowserRouter>
  );
}
