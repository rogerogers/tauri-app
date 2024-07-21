use tauri::{CustomMenuItem, Menu, MenuItem, Submenu};

pub fn top_menu() -> Menu {
    let setting = CustomMenuItem::new("setting", "Setting");

    let file_menu = Submenu::new(
        "File",
        Menu::new()
            .add_item(setting)
            .add_native_item(MenuItem::Quit),
    );

    let edit_menu = Submenu::new(
        "Edit",
        Menu::new()
            .add_native_item(MenuItem::Copy)
            .add_native_item(MenuItem::Paste),
    );

    let menu = Menu::new().add_submenu(file_menu).add_submenu(edit_menu);

    return menu;
}
