window.onload = function() {
  var add_item = document.querySelector("input");
  var button_add_item = document.querySelector("span");

  button_add_item.onclick = function(clicked) {
    var todo_element = document.createElement("LI");
    var span = document.createElement("SPAN");
    var input_element = document.createElement("INPUT");

    input_element.setAttribute("type", "checkbox");
    input_element.setAttribute("value", "checkbox");

    var item_val = document.createTextNode(add_item.value);

    span.appendChild(item_val);
    todo_element.appendChild(input_element);

    todo_element.appendChild(span);

    document.getElementsByClassName("list")[0].appendChild(todo_element);
    this.value="";

  };
  add_item.onkeypress = function(ekle) {
    if (ekle.which == 13) {
      var todo_element = document.createElement("LI");
      var span = document.createElement("SPAN");
      var input_element = document.createElement("INPUT");

      input_element.setAttribute("type", "checkbox");
      input_element.setAttribute("value", "checkbox");

      var item_val = document.createTextNode(add_item.value);

      span.appendChild(item_val);
      todo_element.appendChild(input_element);

      todo_element.appendChild(span);

      document.getElementsByClassName("list")[0].appendChild(todo_element);
    this.value="";
  }
    
  };
};
