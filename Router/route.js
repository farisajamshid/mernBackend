// all Routes , which will be using with Axios
const express=require("express")
const {Registration,forgotpassword }=require("../Controllers/userRegistration")
const Login=require("../Controllers/userLogin")
const middle= require("../Controllers/tokenverification")
const update=require("../Controllers/userUpdate")
const del=require("../Controllers/userDelete")
const getDetails=require("../Controllers/userDetails")
//const errorMiddlewareHandler=require("../Middlewares/errorMiddlewareHandler")
//const bookinsert=require("../Controllers/bookInsertion")
//const {bookupdate,bookdelete} =require("../Controllers/bookUpdate")
//const {Update,bookDelete, booklistbyUser, bookDeleteAll} =require("../Controllers/bookUpdate")
const {filterProduct, productCount, pageList, searchProduct }=require("../Controllers/filterProduct")
//const bookdisplay=require("../Controllers/bookFind")
// const hello=require("../Controllers/hello")
// const test=require("../Middlewares/test")
const{requireSignIn, isAdmin }= require("../Middlewares/authMiddleware")
const {categorycreation,getCategories, categoryupdate, categorydelete}=require("../Controllers/category")
const {productcreation,getProducts, productUpdate, productDelete, getProduct, braintreeTokenController,braintreePaymentController }=require("../Controllers/product")
const {getOrder,  getAllOrders, orderUpdate}=require("../Controllers/order")

const router=express.Router()
//app.use(error.errorMiddlewareHandler)
router.route("/api/userregistration").post(Registration)
router.route("/api/userlogin").post(Login)
router.route("/api/userupdate").put(requireSignIn, update)
router.route("/api/userdelete/:id").delete(del)
//router.route("/api/userdetails").get(getDetails)
//router.route("/api/userdetails").get(middle,getDetails)
router.route("/api/userdetails").get(middle, getDetails)
// router.route("/api/bookinsert").post( bookinsert)
// router.route("/api/bookupdate/:id").put(middle, Update)
// router.route("/api/bookdelete/:id").delete(bookDelete)
// router.route("/api/bookdisplay").get(bookdisplay)
// router.route("/api/booksbyuser/:id").get(booklistbyUser)
router.route("/api/categorycreation").post(categorycreation)
router.route("/api/categories").get(getCategories)
router.route("/api/categoryupdate/:id").put(categoryupdate)
router.route("/api/categorydelete/:id").delete(categorydelete)

router.route("/api/productcreation").post(productcreation)
router.route("/api/getproducts").get(getProducts)
router.route("/api/getproduct/:id").get(getProduct)
router.route("/api/updateproduct/:id").put(productUpdate)
router.route("/api/deleteproduct/:id").delete(productDelete)
router.route("/api/filterproduct").post(filterProduct)
router.route("/api/productcount").get(productCount)
router.route("/api/pagelist/:page").get(pageList)
router.route("/api/searchproduct/:keyword").get(searchProduct)
router.route("/braintree/token").get(braintreeTokenController)
router.route("/braintree/payment").post(requireSignIn,braintreePaymentController)
router.route("/api/getorder").get(requireSignIn,getOrder)
router.route("/api/getallorders").get(requireSignIn,isAdmin,getAllOrders )
router.route("/api/orderstatusupdate/:id").put(requireSignIn,isAdmin,orderUpdate )
//router.route("/api/removeallbooks").delete(bookDeleteAll)
// router.route("/test").get(test, hello)
 router.route("/api/forgotpassword").post(forgotpassword)
router.get("/user-auth",requireSignIn,(req, res)=>{
    res.status(200).send({ok:"true"})
} )
router.get("/admin-auth",requireSignIn,isAdmin,(req, res)=>{
    res.status(200).send({ok:"true"})
} )









module.exports=router