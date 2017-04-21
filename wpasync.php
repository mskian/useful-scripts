/*function to add async to all scripts*/
function js_async_attr($tag){
# Add async to all remaining scripts
return str_replace( ' src', ' async="async" src', $tag );
}
add_filter( 'script_loader_tag', 'js_async_attr', 10 );
