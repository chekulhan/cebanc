<button type="button" id="btn1">Clik me</button>

    <script>
    function math1(){
        var x = window.prompt('Introducir num 1');
        var y = window.prompt('Introducir num 1');
        var r = Number(x) +Number(y); // parseInt, IsNaN(x)
        
        
        window.alert(`La respuesta es ${r}`)

    }
    document.getElementById('btn1').addEventListener('click', math1);


