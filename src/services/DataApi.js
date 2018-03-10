const api = "https://api.github.com/"

export const getAll = (org) =>
  fetch(`${api}orgs/${org}/repos`, {})
    .then(res => res.json())
    .then(data => data)

export const getSingle = (repoName, org) =>
  fetch(`${api}repos/${org}/${repoName}/commits`, {})
    .then(res => res.json())
    .then(data => data)
