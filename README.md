
# Description
This is project to test moderne recipe.
Used another project __openrewrite-java-r1__ project as dependencies so download that and publish to maven local first.

# Setup

https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro

Create account https://app.moderne.io/
Download `mod` and add to system `path`
Create auth token and configure using commands.
```bash
mod config moderne edit --token token-value
```

```bash
gradle clean build

# Build LST
mod build .

# Note: if you are getting error for "mod build ." gradle version not found, use to generate gradle wrapper & re-try.
# gradle wrapper

# Test build-in recipe
#https://github.com/openrewrite/rewrite-spring/blob/main/src/main/resources/META-INF/rewrite/replace-methods-rest-template-builder.yml
mod config recipes jar install org.openrewrite.recipe:rewrite-spring:6.8.2
#Declarative
mod run . --recipe org.openrewrite.java.spring.boot3.ReplaceRestTemplateBuilderMethods
# imperative
mod run . --recipe org.openrewrite.java.spring.boot3.ReplaceRestTemplateBuilderRequestFactoryMethod


# Test custom recipe
# one or more recipe can be installed 
mod config recipes jar install com.mysample:openrewrite-java-r1:1.0.0
# Run independent recipe using imerative recipe
mod run . --recipe com.sample.r1.MethodAddRecipe
#Run recipe using declarative way
mod run . --recipe  com.sample.r1.MyYAMLRecipe


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

# Hard cache delete for particular recipe or group or all
-  user-home\.moderne\cli\maven-cache\ 