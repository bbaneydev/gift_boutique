class CreateItems < ActiveRecord::Migration[6.1]
  def change
    create_table :items do |t|
      t.string :name
      t.integer :price
      t.string :item_type
      t.text :description
      t.text :info
      t.string :return
      t.string :shipping
      t.string :image
      t.integer :user_id

      t.timestamps
    end
  end
end
