
# Description
This is project to test moderne recipe.
Used another project __openrewrite-java-r1__ project as dependencies so download that and publish to maven local first.

# Setup

https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro

Create account https://app.moderne.io/
Download `mod` and add to system `path`
Create auth token and configure using commands.

```bash
gradle build

# one or more recipe can be installed 
mod config recipes jar install com.mysample:openrewrite-java-r1:1.0.0

mod build .

mod run . --recipe com.sample.r1.MethodAddRecipe

```
# What to do next
    > Click on one of the patch links above to view the changes on a particular repository
    > Run mod study to examine the following data tables produced by this recipe:
          > mod study . --last-recipe-run --data-table RecipeRunStats
          > mod study . --last-recipe-run --data-table SourcesFileResults
    > Run mod git checkout . -b refactor/MethodAddRecipe --last-recipe-run to prepare a refactor/MethodAddRecipe branch for applying the changes
    > Run mod git apply . --last-recipe-run to apply the changes
    > Run mod git apply . --recipe-run 20250531144111-IcXk3 to apply the changes
    > Run mod log runs add . logs.zip --last-run to aggregate run logs

