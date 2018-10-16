(function(){

  var subMenuShownClassName = 'sn-nav__item--show-child';

  // Показ/сокрытие подменю уровня
  $('[data-main-nav-submenu-toggler]').on('click', function(e){
    e.preventDefault();

    // если это подменю 3го уровня
    if ($(this).closest('.sn-nav__sub-list').length) {
      $(this).closest('.sn-nav__sub-list').find('.'+subMenuShownClassName).removeClass(subMenuShownClassName);
      $(this).closest('.sn-nav__item').addClass(subMenuShownClassName);
    }
    // иначе, если подменюха уже была открыта (нужно закрывать)
    else if ($(this).closest('.sn-nav__item').is('.'+subMenuShownClassName)) {
      hideAllSubmenu();
    }
    else {
      hideAllSubmenu();
      $(this).closest('.sn-nav__item').addClass(subMenuShownClassName);
    }
  });

  // Закрытие подуровней меню, если был клик вне меню
  $(document).on('click', function(e){
    if (!$(e.target).closest('.sn-nav__list').length && !$(e.target).closest('.login').length) {
      hideAllSubmenu();
    }
  });

  // Сокрытие видимости всех подменю 2го уровня
  function hideAllSubmenu() {
    $('.'+subMenuShownClassName).removeClass(subMenuShownClassName);
  }

}());
