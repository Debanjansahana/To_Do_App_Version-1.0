function Todoitem2(){
  let todoName = "Go to college";
  let todoDate = "4/10/23"
  return (
    <div class="container text-center">
    <div class="row">
    <div class="col-6">
      {todoName}
      </div>
    <div class="col-4">
      {todoDate}
      </div>
    <div class="col-2">
    <button type="button" class="btn btn-danger">Delete</button>
    </div>
  </div>
  </div>
  )
}
export default Todoitem2;