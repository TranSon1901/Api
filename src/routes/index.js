import homeRouter from "./homepage"
import NewPageRouter from "./newpage"
const router=(app)=>{
    app.use('/',homeRouter)
    app.use('/newpage',NewPageRouter)
}
export default router