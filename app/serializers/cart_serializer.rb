class CartSerializer < ActiveModel::Serializer
  attributes :id, :items, :quantity
  # belongs_to :user
  # belongs_to :item, serializer: ItemSerializer

  def items
    object.item
  end
end
