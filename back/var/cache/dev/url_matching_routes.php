<?php

/**
 * This file has been auto-generated
 * by the Symfony Routing Component.
 */

return [
    false, // $matchHost
    [ // $staticRoutes
        '/_profiler' => [[['_route' => '_profiler_home', '_controller' => 'web_profiler.controller.profiler::homeAction'], null, null, null, true, false, null]],
        '/_profiler/search' => [[['_route' => '_profiler_search', '_controller' => 'web_profiler.controller.profiler::searchAction'], null, null, null, false, false, null]],
        '/_profiler/search_bar' => [[['_route' => '_profiler_search_bar', '_controller' => 'web_profiler.controller.profiler::searchBarAction'], null, null, null, false, false, null]],
        '/_profiler/phpinfo' => [[['_route' => '_profiler_phpinfo', '_controller' => 'web_profiler.controller.profiler::phpinfoAction'], null, null, null, false, false, null]],
        '/_profiler/xdebug' => [[['_route' => '_profiler_xdebug', '_controller' => 'web_profiler.controller.profiler::xdebugAction'], null, null, null, false, false, null]],
        '/_profiler/open' => [[['_route' => '_profiler_open_file', '_controller' => 'web_profiler.controller.profiler::openAction'], null, null, null, false, false, null]],
        '/activity/create' => [[['_route' => 'create-activity', '_controller' => 'App\\Controller\\ActivityController::create'], null, ['POST' => 0, 'GET' => 1], null, false, false, null]],
        '/activity' => [[['_route' => 'readAll-activity', '_controller' => 'App\\Controller\\ActivityController::readAll'], null, null, null, false, false, null]],
        '/activity/delete' => [[['_route' => 'delete-activity', '_controller' => 'App\\Controller\\ActivityController::delete'], null, null, null, false, false, null]],
        '/generate-color-json' => [[['_route' => 'generate_color_json', '_controller' => 'App\\Controller\\ColorController::getColorData'], null, null, null, false, false, null]],
        '/' => [[['_route' => 'app_event', '_controller' => 'App\\Controller\\EventController::index'], null, null, null, false, false, null]],
        '/event/create' => [[['_route' => 'create-event', '_controller' => 'App\\Controller\\EventController::create'], null, ['POST' => 0, 'GET' => 1], null, false, false, null]],
        '/event' => [[['_route' => 'readAll-event', '_controller' => 'App\\Controller\\EventController::readAll'], null, null, null, false, false, null]],
        '/event/delete' => [[['_route' => 'event-delete', '_controller' => 'App\\Controller\\EventController::delete'], null, null, null, false, false, null]],
        '/ticket/message' => [[['_route' => 'readAll-ticket-message', '_controller' => 'App\\Controller\\MessageTicketController::readAll'], null, null, null, false, false, null]],
        '/ticket/message/delete' => [[['_route' => 'delete-ticket-message', '_controller' => 'App\\Controller\\MessageTicketController::delete'], null, null, null, false, false, null]],
        '/photo/create' => [[['_route' => 'create-photo', '_controller' => 'App\\Controller\\PhotoController::create'], null, ['POST' => 0], null, false, false, null]],
        '/photo' => [[['_route' => 'readAll-Photo', '_controller' => 'App\\Controller\\PhotoController::readAll'], null, null, null, false, false, null]],
        '/role-management' => [[['_route' => 'role-management', '_controller' => 'App\\Controller\\RoleManagementController::readAll'], null, null, null, false, false, null]],
        '/role-management/role-admin' => [[['_route' => 'tri_role_admin', '_controller' => 'App\\Controller\\RoleManagementController::readAllAdmin'], null, null, null, false, false, null]],
        '/role-management/role-modo' => [[['_route' => 'tri_role_modo', '_controller' => 'App\\Controller\\RoleManagementController::readAllModo'], null, null, null, false, false, null]],
        '/role-management/role-adherent' => [[['_route' => 'tri_role_adherent', '_controller' => 'App\\Controller\\RoleManagementController::readAllAdherent'], null, null, null, false, false, null]],
        '/role-management/role-visitor' => [[['_route' => 'tri_role_visitor', '_controller' => 'App\\Controller\\RoleManagementController::readAllVisitor'], null, null, null, false, false, null]],
        '/log/connection' => [[['_route' => 'connection', '_controller' => 'App\\Controller\\SecurityController::connection'], null, null, null, false, false, null]],
        '/logout' => [[['_route' => 'logout', '_controller' => 'App\\Controller\\SecurityController::logout'], null, null, null, false, false, null]],
        '/shop' => [[['_route' => 'readAll-Shop', '_controller' => 'App\\Controller\\ShopController::readAll'], null, null, null, false, false, null]],
        '/shop/create' => [[['_route' => 'create-shop', '_controller' => 'App\\Controller\\ShopController::create'], null, ['POST' => 0, 'GET' => 1], null, false, false, null]],
        '/shop/delete' => [[['_route' => 'shop-delete', '_controller' => 'App\\Controller\\ShopController::delete'], null, null, null, false, false, null]],
        '/log/signup/create' => [[['_route' => 'log_signup_create', '_controller' => 'App\\Controller\\SignupController::create'], null, ['POST' => 0], null, false, false, null]],
        '/log/read-all' => [[['_route' => 'readall-log', '_controller' => 'App\\Controller\\SignupController::readAll'], null, null, null, false, false, null]],
        '/log/read-all/admin' => [[['_route' => 'readall-tri-admin', '_controller' => 'App\\Controller\\SignupController::readAllAdmin'], null, null, null, false, false, null]],
        '/log/read-all/modo' => [[['_route' => 'readall-tri-modo', '_controller' => 'App\\Controller\\SignupController::readAllModo'], null, null, null, false, false, null]],
        '/log/read-all/adherent' => [[['_route' => 'readall-tri-adherent', '_controller' => 'App\\Controller\\SignupController::readAllAdherent'], null, null, null, false, false, null]],
        '/log/read-all/visitor' => [[['_route' => 'readall-tri-visitor', '_controller' => 'App\\Controller\\SignupController::readAllVisitor'], null, null, null, false, false, null]],
        '/ticket/create' => [[['_route' => 'create-ticket', '_controller' => 'App\\Controller\\TicketController::create'], null, ['POST' => 0, 'GET' => 1], null, false, false, null]],
        '/ticket' => [[['_route' => 'readAll-ticket', '_controller' => 'App\\Controller\\TicketController::readAll'], null, null, null, false, false, null]],
        '/ticket/delete' => [[['_route' => 'delete-ticket', '_controller' => 'App\\Controller\\TicketController::delete'], null, null, null, false, false, null]],
    ],
    [ // $regexpList
        0 => '{^(?'
                .'|/_(?'
                    .'|error/(\\d+)(?:\\.([^/]++))?(*:38)'
                    .'|wdt/([^/]++)(*:57)'
                    .'|profiler/(?'
                        .'|font/([^/\\.]++)\\.woff2(*:98)'
                        .'|([^/]++)(?'
                            .'|/(?'
                                .'|search/results(*:134)'
                                .'|router(*:148)'
                                .'|exception(?'
                                    .'|(*:168)'
                                    .'|\\.css(*:181)'
                                .')'
                            .')'
                            .'|(*:191)'
                        .')'
                    .')'
                .')'
                .'|/activity/(?'
                    .'|read/([^/]++)(*:228)'
                    .'|update/(?'
                        .'|([^/]++)(*:254)'
                        .'|love/([^/]++)(*:275)'
                        .'|sondage/([^/]++)(*:299)'
                    .')'
                .')'
                .'|/event/(?'
                    .'|read/([^/]++)(*:332)'
                    .'|update/([^/]++)(*:355)'
                .')'
                .'|/ticket/(?'
                    .'|([^/]++)/message/create(*:398)'
                    .'|message/(?'
                        .'|read/([^/]++)(*:430)'
                        .'|update/([^/]++)(*:453)'
                    .')'
                    .'|read/([^/]++)(*:475)'
                    .'|update/([^/]++)(*:498)'
                .')'
                .'|/photo/(?'
                    .'|read/([^/]++)(*:530)'
                    .'|update/([^/]++)(*:553)'
                    .'|delete/([^/]++)(*:576)'
                .')'
                .'|/role\\-management/update/([^/]++)(*:618)'
                .'|/shop/(?'
                    .'|read/([^/]++)(*:648)'
                    .'|update/([^/]++)(*:671)'
                .')'
                .'|/log/(?'
                    .'|delete/([^/]++)(*:703)'
                    .'|read/([^/]++)(*:724)'
                    .'|update/([^/]++)(*:747)'
                .')'
            .')/?$}sDu',
    ],
    [ // $dynamicRoutes
        38 => [[['_route' => '_preview_error', '_controller' => 'error_controller::preview', '_format' => 'html'], ['code', '_format'], null, null, false, true, null]],
        57 => [[['_route' => '_wdt', '_controller' => 'web_profiler.controller.profiler::toolbarAction'], ['token'], null, null, false, true, null]],
        98 => [[['_route' => '_profiler_font', '_controller' => 'web_profiler.controller.profiler::fontAction'], ['fontName'], null, null, false, false, null]],
        134 => [[['_route' => '_profiler_search_results', '_controller' => 'web_profiler.controller.profiler::searchResultsAction'], ['token'], null, null, false, false, null]],
        148 => [[['_route' => '_profiler_router', '_controller' => 'web_profiler.controller.router::panelAction'], ['token'], null, null, false, false, null]],
        168 => [[['_route' => '_profiler_exception', '_controller' => 'web_profiler.controller.exception_panel::body'], ['token'], null, null, false, false, null]],
        181 => [[['_route' => '_profiler_exception_css', '_controller' => 'web_profiler.controller.exception_panel::stylesheet'], ['token'], null, null, false, false, null]],
        191 => [[['_route' => '_profiler', '_controller' => 'web_profiler.controller.profiler::panelAction'], ['token'], null, null, false, true, null]],
        228 => [[['_route' => 'read-activity', '_controller' => 'App\\Controller\\ActivityController::read'], ['id'], null, null, false, true, null]],
        254 => [[['_route' => 'update-activity', '_controller' => 'App\\Controller\\ActivityController::update'], ['id'], null, null, false, true, null]],
        275 => [[['_route' => 'love-update-activity', '_controller' => 'App\\Controller\\ActivityController::updateLove'], ['id'], null, null, false, true, null]],
        299 => [[['_route' => 'sondage-update-activity', '_controller' => 'App\\Controller\\ActivityController::updateSondage'], ['id'], null, null, false, true, null]],
        332 => [[['_route' => 'read-event', '_controller' => 'App\\Controller\\EventController::read'], ['id'], null, null, false, true, null]],
        355 => [[['_route' => 'update-event', '_controller' => 'App\\Controller\\EventController::update'], ['id'], null, null, false, true, null]],
        398 => [[['_route' => 'create-ticket-message', '_controller' => 'App\\Controller\\MessageTicketController::create'], ['ticketId'], ['POST' => 0], null, false, false, null]],
        430 => [[['_route' => 'read-ticket-message', '_controller' => 'App\\Controller\\MessageTicketController::read'], ['id'], ['GET' => 0], null, false, true, null]],
        453 => [[['_route' => 'update-ticket-message', '_controller' => 'App\\Controller\\MessageTicketController::update'], ['id'], null, null, false, true, null]],
        475 => [[['_route' => 'read-ticket', '_controller' => 'App\\Controller\\TicketController::read'], ['id'], null, null, false, true, null]],
        498 => [[['_route' => 'update-ticket', '_controller' => 'App\\Controller\\TicketController::update'], ['id'], null, null, false, true, null]],
        530 => [[['_route' => 'read-photo', '_controller' => 'App\\Controller\\PhotoController::read'], ['id'], null, null, false, true, null]],
        553 => [[['_route' => 'update-photo', '_controller' => 'App\\Controller\\PhotoController::update'], ['id'], null, null, false, true, null]],
        576 => [[['_route' => 'delete-photo', '_controller' => 'App\\Controller\\PhotoController::delete'], ['id'], null, null, false, true, null]],
        618 => [[['_route' => 'update-role-management', '_controller' => 'App\\Controller\\RoleManagementController::update'], ['id'], null, null, false, true, null]],
        648 => [[['_route' => 'read-shop', '_controller' => 'App\\Controller\\ShopController::read'], ['id'], null, null, false, true, null]],
        671 => [[['_route' => 'update-shop', '_controller' => 'App\\Controller\\ShopController::update'], ['id'], null, null, false, true, null]],
        703 => [[['_route' => 'delete-user', '_controller' => 'App\\Controller\\SignupController::delete'], ['id'], null, null, false, true, null]],
        724 => [[['_route' => 'read-log', '_controller' => 'App\\Controller\\SignupController::read'], ['id'], null, null, false, true, null]],
        747 => [
            [['_route' => 'update-log', '_controller' => 'App\\Controller\\SignupController::update'], ['id'], null, null, false, true, null],
            [null, null, null, null, false, false, 0],
        ],
    ],
    null, // $checkCondition
];
