// import HappyTracker from "./HappyTracker"
// import SadTracker from "./SadTracker"
// import HappyIncrementor from "./HappyIncrementor"
// import SadIncrementor from "./SadIncrementor"
// import { Clear } from "./Clear"
import { Route, Routes } from "react-router-dom"
import OrderListPage from "./OrderListPage"
import ProductsList from "./productsList"
import OrderDetailRedux from "./OrderDetailRedux"

function App() {

  return (
    <div className="p-2 space-y-2">
      <Routes>
        <Route index element={<ProductsList/>}/>
        <Route path="/orders" element={<OrderListPage/>}></Route>
        <Route path="/orders/:orderId" element={<OrderDetailRedux orderId={2}/>}></Route>
      </Routes>
    </div>
  )
}

export default App
