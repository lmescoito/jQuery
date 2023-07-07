// instancia jquery e evita conflitos
// jQuery( function($){
    $(document).ready(function(){

        $('.owl-carousel').owlCarousel();
    
        let titulos = $('h4') // tag
       
        let itens = $('.featured-item') // class
        
        let destaques = $('#featured') // id
    
        console.log(titulos.first());
    
        // Configuração de produtos
    
        $('.featured-item a').addClass('btn btn-dark stretch-link');
    
        $('.featured-item:first h4').append('<span class="badge bg-secondary">Novo</span>')
        // $('.featured-item:first h4').start('<span class="badge bg-secondary">Novo</span>')
        // $('.featured-item:first h4').html('<span class="badge bg-secondary">Novo</span>')
        // $('.featured-item:first h4').addClass('active')
        // $('.featured-item:first h4').removeClass('active')
        // $('.featured-item:first h4').toggleClass('active')
        // $('.featured-item:first h4').hide()
        // $('.featured-item:first h4').show()
        // $('.featured-item:first h4').fadeIn(2000)
        // $('.featured-item:first h4').fadeOut()
        //  $('.featured-item:first h4').css('color', '#f00')
         
         $('.featured-item h4').dblclick( function(){
    
            $(this).css({
                'color': '#f00',
                'background': '#ff0',
                'font-weight': '100',
            });
    
         });

   
         /*
          * Manipulação de eventos
          */
         $('.featured-item a').on('blur', function(event){
    
            event.preventDefault();
    
            alert('Produto esgotado');
    
         })
        })

        $('#form-submit').on('click', function(e){

            e.preventDefault()
      
            if( $('#email').val() != '' ){
      
               $('#email').animate({
                  opacity: "toggle",
                  top: "-50"
               }, 500, function(){
                  console.log($(this).val())
               })
      
            }
      
      
         });
      
      
         /*
          * Ouvinte de eventos .nav-modal-open
          */
         $('.nav-modal-open').on('click', function(e){
      
            e.preventDefault();
      
            let elem = $(this).attr('rel')
      
            $('.modal-body').html($('#'+elem).html())
            
            $('.modal-header h5.modal-title').html($(this).text())
      
            let myModal = new bootstrap.Modal($('#modelId'))
      
            myModal.show()
      
      
         })
      
      
         /*
          * TODO: incrementar a validação
          * - checar se o nome é válido (mais de 2 caracteres)
          * - checar se o email é válido com ao menos um "@" e "."
          * - checar se o cpf é válido com regex
          */
         function validate( elem ){
            if( elem.val() == '') {
      
               console.log('o campo de '+ elem.attr('name') + ' é obrigatório')
      
               elem.parent().find('.text-muted').show()
      
               elem.addClass('invalid')
      
               return false
            } else {
               elem.parent().find('.text-muted').hide()
               elem.removeClass('invalid')
            }
         }

         $(document).ready(function() {
            // Evento de clique no botão de abrir a pop-up de cadastro
            $('#btnAbrirCadastro').click(function() {
              // Mostra a pop-up de cadastro de dados
              $('.popup-container').show();
            });
      
            // Evento de clique no botão de enviar na pop-up de cadastro
            $('#btnEnviar').click(function() {
              // Esconde a pop-up de cadastro de dados
              $('.popup-container').hide();
            });
          });

          $(document).ready(function() {
            // Evento de clique no botão de pedido
            $('.btn-pedido').click(function() {
              var prato = $(this).data('prato');
              // Exibe o formulário de pedido correspondente ao prato clicado
              $('#' + prato + '-pedido-form').show();
            });
      
            // Evento de clique no botão de cancelar pedido
            $('.btn-cancelar').click(function() {
              var prato = $(this).data('prato');
              // Oculta o formulário de pedido correspondente ao prato
              $('#' + prato + '-pedido-form').hide();
            });
          });

