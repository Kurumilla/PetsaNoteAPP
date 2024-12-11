FROM ruby:3.0.1-buster

RUN apt-get update -y && apt-get install -y \
    curl \
    build-essential \
    libpq-dev \
    npm

RUN curl -fsSL https://deb.nodesource.com/setup_16.x | bash -
RUN apt-get install -y nodejs

RUN node -v
RUN npm -v

RUN npm install -g yarn

WORKDIR /app

COPY Gemfile* ./

RUN gem install bundler
RUN bundle install

COPY . .

RUN yarn install

CMD ["sh", "-c", "rails db:create db:migrate db:seed && rails server -b 0.0.0.0"]
# CMD ["rails", "db:setup"]
