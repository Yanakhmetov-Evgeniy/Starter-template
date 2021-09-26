function nameFunction(idOne, idTwo, newClass){   // задает функцию на ту группу Id которую мы укажем ниже (нужно указать названия id группы и в скобках названия id) саму функцию указываем в фигурных скобках
   const nameOneId = document.getElementById(idOne); // const мини функция которая задает названия следующим действием. в данном случае он говорит найди такой то id в документе
   const nameTwoId = document.getElementById(idTwo);

   if(nameOneId && nameTwoId){                       // if (если) (первое и второе минифункции реализуемы, тоесть есть данные id в документе) то {название действий}
      nameTwoId.addEventListener('click', function(){ // при нажатие на вторую id  мысоздаем след функцию
         nameOneId.classList.toggle(newClass);  // к первого id добавляется новый класс который мы прописали в группу id
       })
   }   
}
nameFunction('menu-nav', 'menu-btn', "active" );
