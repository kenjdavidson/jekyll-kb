# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.0.7] - 2020-01-05
### Changed
- Refactored config.yml properties `github.username`, `github.url` and `github.edit_url` to remove the github object and contain just the `github_username`, `github_url` and `github_edit_url` to get around a bug with `remote_theme` not working correctly when a github object exists.

### Removed 
- Removed all previous tags [1.0.0] through [1.0.6] as they didn't work with Github Pages