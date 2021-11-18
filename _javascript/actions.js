// Botões Menu
var home = document.getElementById("home")


var btn_artigo_http = document.getElementById("btn_http");
        function subir_http() {
        var http = document.getElementById('http');
        home.classList.toggle("active");
        http.classList.toggle('active');
    }
    btn_artigo_http.addEventListener('click', subir_http);

var btn_artigo_html_css = document.getElementById("btn_html_css");
        function subir_html_css() {
        var html_css = document.getElementById('html_css');
        home.classList.toggle("active");
        html_css.classList.toggle('active');
    }
    btn_artigo_html_css.addEventListener('click', subir_html_css);

var btn_artigo_javascript = document.getElementById("btn_javascript");
        function subir_javascript() {
        var javascript = document.getElementById('javascript');
        home.classList.toggle("active");
        javascript.classList.toggle('active');
    }
    btn_artigo_javascript.addEventListener('click', subir_javascript);





// Botões Voltar
var btn_voltar = document.getElementById("btn_voltar_http");
        function descer_http() {
        var pagina_atual = document.getElementById('http');
        home.classList.toggle("active");
        pagina_atual.classList.toggle('active');
    }
   btn_voltar.addEventListener('click',descer_http);

var btn_voltar = document.getElementById("btn_voltar_html_css");
        function descer_html_css() {
        var pagina_atual = document.getElementById('html_css');
        home.classList.toggle("active");
        pagina_atual.classList.toggle('active');
    }
   btn_voltar.addEventListener('click', descer_html_css);

var btn_voltar = document.getElementById("btn_voltar_javascript");
        function descer_javascript() {
        var pagina_atual = document.getElementById('javascript');
        home.classList.toggle("active");
        pagina_atual.classList.toggle('active');
    }
   btn_voltar.addEventListener('click', descer_javascript);