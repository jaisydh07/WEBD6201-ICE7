"use strict";

(function (core) {
    class Router {
        // constructors
        constructor() {
            this.ActiveLink = "";
        }

        // Public Properties (getters and setters)
        get ActiveLink() {
            return this.m_activeLink;
        }

        set ActiveLink(link) {
            this.m_activeLink = link;
        }
        
        Add(route) 
        {
            this.m_routingTable.push(route);
        }
       
        AddTable(routingTable) 
        {
            this.m_routingTable = routingTable;
        }
        
        Find(route) 
        {
            return this.m_routingTable.indexOf(route);
        }
        
        Remove(route) 
        {
            if (this.Find(route) > -1) {
                this.m_routingTable.splice(this.Find(route), 1);
                return true;
            }
            return false;
        }
        
        ToString() 
        {
            return this.m_routingTable.toString();
        }
    }
    core.Router = Router;
})(core || (core = {}));

let router = new core.Router();
router.AddTable(["/",
    "/home",
    "/about",
    "/services",
    "/contact",
    "/contact-list",
    "/projects",
    "/register",
    "/login",
    "/edit"]);
let route = location.pathname;
if (router.Find(route) > -1) {
    router.ActiveLink = (route == "/") ? "home" : route.substring(1);
}
else {
    router.ActiveLink = "404";
}

//# sourceMappingURL=router.js.map


