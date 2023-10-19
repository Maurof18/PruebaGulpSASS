const {src,dest} = require('gulp') //importa las dependencias
//gulp-sass al ener una sola funcion no hace falta en encerrar sass con {}
const sass = require('gulp-sass')(require('sass'))

sass.compiler= require('dart-sass')
function compilarSASS(){
   //src es para encontrar la fuente de un archivo
   //pipe para almacenar un archivo
   //dest es una funcion para definir donde se va a almacenar un archivo
   return src("./src/scss/app.scss")
         .pipe( sass() )
         .pipe( dest("./build/css") )
}

exports.compilarSASS = compilarSASS