app.directive('myCustomer', function () {
    return {
        link: function (scope, element, attributes) {
            scope.dat = scope[attributes['data']];

        },
        restrict: "E",
       
        template: 'adfghjk'
        
    };
});
app.directive('customer', function () {
    return {
        link: function (scope, element, attributes) {
            // scope.dat = scope[attributes['customer']];

        },
        
        template: 'Мy first directiv'

    };
});






            // Директива определения объекта
// Cпособ создания директив через Directive Definition Object


// Основные свойства Directive Definition Object:

// link - определяет ссылочную функцию для директивы
// replace - определяет замещать ли содержимое элемента к 
// которому была применена директива сгенерированным контентом
// restrict    определяет ограничения на применение директивы
// scope - создает новый scope или isolated scope для директивы
// template - определяет шаблон который будет вставлен в HTML разметку
// templateUrl - определяет адрес внешнего шаблона для создания HTML разметки


// replace: ( true / false ) 
// true - элемент, которому будет присвоена директива
// будет заменен разметкой сгенерированной по шаблону
// false - в элемент, к которому присвоена директива, 
// будет добавлена разметка

// Для того, чтобы увидеть эффект работы директивы, 
// необходимо открыть инспектор DOM в браузере

// restrict определяет способ применения директивы:
// E - Element name (default): <my-directive></my-directive>
// A - Attribute (default): <div my-directive="exp"></div>
// C - Class: <div class="my-directive: exp;"></div>
// M - Comment: <!-- directive: my-directive exp -->


// scope: true - создать собственый scope для дерективы
/* scope: { } В данном случае директива создается с 
изолированным scope - данный scope не участвует в наследовании. */
/* scope: { property: "@propname" }
     с помощью @ указываем one-way binding на атрибут propname
    Данный механизм упрощает взаимодействие директивы и контроллера, 
   позволяя получить нужные данные из атрибута DOM элемента*/
/*scope: {property: "=source"}
    = определяет двунаправленную привязку между isolated scope и scope контроллера */
/*scope: { fruit: "=fruitName",
           getType: "&value" } 
           & значение атрибута будет привязано к функции getType */