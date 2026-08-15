ace.define("ace/theme/monokai",["require","exports","module","ace/lib/dom"],function(require,exports,module){

exports.isDark=true;
exports.cssClass="ace-monokai";

exports.cssText=
".ace-monokai .ace_gutter{"+
"background:#171a21;"+
"color:#a9b0c0"+
"}"+

".ace-monokai .ace_print-margin{"+
"width:1px;"+
"background:#333"+
"}"+

".ace-monokai{"+
"background-color:#0f1115;"+
"color:#e8eaf0"+
"}"+

".ace-monokai .ace_cursor{"+
"color:#e8eaf0"+
"}"+

".ace-monokai .ace_marker-layer .ace_selection{"+
"background:rgba(110,168,254,.22)"+
"}"+

".ace-monokai .ace_marker-layer .ace_active-line{"+
"background:#171a21"+
"}"+

".ace-monokai .ace_gutter-active-line{"+
"background:#1d2230"+
"}"+

".ace-monokai .ace_marker-layer .ace_bracket{"+
"border:1px solid rgba(110,168,254,.5)"+
"}"+

".ace-monokai .ace_marker-layer .ace_selected-word{"+
"border:1px solid rgba(110,168,254,.45)"+
"}"+

".ace-monokai .ace_invisible{"+
"color:#555"+
"}"+

".ace-monokai .ace_entity.ace_name.ace_tag,"+
".ace-monokai .ace_keyword,"+
".ace-monokai .ace_meta.ace_tag,"+
".ace-monokai .ace_storage{"+
"color:#6ea8fe"+
"}"+

".ace-monokai .ace_punctuation,"+
".ace-monokai .ace_punctuation.ace_tag{"+
"color:#e8eaf0"+
"}"+

".ace-monokai .ace_constant.ace_character,"+
".ace-monokai .ace_constant.ace_language,"+
".ace-monokai .ace_constant.ace_numeric,"+
".ace-monokai .ace_constant.ace_other{"+
"color:#8bd3ff"+
"}"+

".ace-monokai .ace_invalid{"+
"color:#fff;"+
"background:#d9534f"+
"}"+

".ace-monokai .ace_invalid.ace_deprecated{"+
"color:#fff;"+
"background:#b9a7ff"+
"}"+

".ace-monokai .ace_support.ace_constant,"+
".ace-monokai .ace_support.ace_function{"+
"color:#8bd3ff"+
"}"+

".ace-monokai .ace_fold{"+
"background:#6ea8fe;"+
"border-color:#e8eaf0"+
"}"+

".ace-monokai .ace_storage.ace_type,"+
".ace-monokai .ace_support.ace_class,"+
".ace-monokai .ace_support.ace_type{"+
"font-style:italic;"+
"color:#8bd3ff"+
"}"+

".ace-monokai .ace_entity.ace_name.ace_function,"+
".ace-monokai .ace_entity.ace_other,"+
".ace-monokai .ace_entity.ace_other.ace_attribute-name,"+
".ace-monokai .ace_variable{"+
"color:#8bd3ff"+
"}"+

".ace-monokai .ace_variable.ace_parameter{"+
"font-style:italic;"+
"color:#a9b0c0"+
"}"+

".ace-monokai .ace_string{"+
"color:#a9d18e"+
"}"+

".ace-monokai .ace_comment{"+
"color:#707888"+
"}"+

".ace-monokai .ace_indent-guide{"+
"background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWPQ0FD0ZXBzd/wPAAjVAoxeSgNeAAAAAElFTkSuQmCC) right repeat-y"+
"}";

var dom=require("../lib/dom");

dom.importCssString(
    exports.cssText,
    exports.cssClass
);
});