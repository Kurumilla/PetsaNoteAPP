class ApplicationController < ActionController::Base
  before_action :set_language

  private

  def set_language
    I18n.locale = params[:language] || cookies[:language] || I18n.default_locale
  end
end
