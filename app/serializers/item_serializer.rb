class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :item_type, :description, :info, :return, :shipping, :image
  has_many :carts
  belongs_to :user
end
