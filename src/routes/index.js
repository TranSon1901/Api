import homeRouter from "./homepage"
import NewPageRouter from "./newpage"
import UserRouter from "./users"
const router= (app) =>{
    app.use('/',homeRouter)
    app.use('/newpage',NewPageRouter)
    app.use('/user',UserRouter)
}
export default router