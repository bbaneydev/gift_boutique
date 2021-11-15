class ItemsController < ApplicationController
    skip_before_action :confirm_authentication, only: [:index, :show]

    def index
        render json: Item.all
    end

    def show
        item = Item.find(params[:id])
        if item
            render json: item
        else
            render json: {error: "Item doesn't exsit"}
        end
    end
end