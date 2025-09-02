source "https://rubygems.org"

# Core Jekyll gem - the static site generator itself
# The ~> 4.3.0 syntax means "allow 4.3.x versions but not 4.4.0"
gem "jekyll", "~> 4.3.0"

# Essential gems that Ruby 3.4+ no longer includes by default
# These were part of Ruby's standard library but are now separate gems
gem "csv"        # Required for processing CSV data (Jekyll uses internally)
gem "logger"     # Logging functionality that Jekyll depends on
gem "base64"     # Base64 encoding/decoding support
gem "bigdecimal" # Arbitrary precision decimal numbers
gem "ostruct"    # OpenStruct class for creating objects from hashes

# SEO optimization plugin for Jekyll
# Automatically generates meta tags for better search engine visibility
gem "jekyll-seo-tag"

# Platform-specific gems for Windows compatibility
# These ensure proper file watching and timezone handling on Windows
platforms :windows do
  gem "tzinfo", ">= 1"        # Timezone definitions for Windows
  gem "tzinfo-data"           # Timezone database for Windows
  gem "wdm", "~> 0.1"         # Windows Directory Monitor for auto-regeneration
end

# Web server for local development
# Ruby 3+ removed WEBrick from standard library, so we need to add it explicitly
gem "webrick"

# Additional Jekyll plugins you might want to enable later
# Uncomment these as needed:

# gem "jekyll-feed"          # Generate an Atom feed of your posts
# gem "jekyll-sitemap"       # Generate a sitemap.xml for search engines
# gem "jekyll-paginate"      # Add pagination to blog posts
# gem "jekyll-redirect-from" # Create redirect pages for moved content
