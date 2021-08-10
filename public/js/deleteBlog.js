function onDeleteClick(id){
    $.ajax({
        type: `DELETE`,
        url: `/ViewBlog/${id}`,
        data: id,
        success: function(data){
            location.replace('/');
            alert(`Blog Deleted!`);
        }
    });
}
