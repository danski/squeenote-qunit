jQuery.fn.accordianMenu = function() {
  
  // Expects to be run against one or more list elements
  var $this = jQuery(this);
  $this.addClass("accordian");
  var list_items = jQuery("li", $this);
  
  // Apply behaviour to each list item
  list_items.each(function(index) {
    var li = jQuery(this);
    var links = jQuery("a", li);
    
    // Attach an attribute to the li to help identify it
    li.attr("data-accordian-index", index);
    
    if(links.length > 0) {
      first_link = jQuery(links[0]);
      
      // Find the element that contains the link (it's okay if the link is standalone)
      var link_container = li.children().has(links[0]);
      if(link_container.length == 0) link_container = first_link;
      link_container.attr("data-accordian", "link_container");
      
      // Find the contents for this li
      var contents = li.children("[data-accordian!=link_container]");
      contents.hide();
      
      // Bind the click event
      first_link.click(function(event) {
        event.preventDefault();
        link = jQuery(this);
        
        // Show the content that goes with this link
        li.children("[data-accordian!=link_container]").show();
        
        // Get all the sibling list items and hide their contents except the first link and whatever contains it
        li.siblings("li").each(function() {
          sibling_li = jQuery(this);
          sibling_li.children("[data-accordian!=link_container]").hide();
        })
      })
      
    }
  });
  
  
}