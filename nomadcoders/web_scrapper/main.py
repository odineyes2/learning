from requests import get
from bs4 import BeautifulSoup

base_url = "https://weworkremotely.com/remote-jobs/search?term="
search_term = "python"

db = []

res = get(f"{base_url}{search_term}")
# res_jobs = {
#    f"{search_term}": res.text,
# }
# db.append(res_jobs)

soup = BeautifulSoup(res.text, "html.parser")
job_section = soup.find_all("section", class_="jobs")
print(job_section)


