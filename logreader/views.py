from django.shortcuts import render
from django.views.generic import View
from django.http import Http404
from hurricane.settings import LOGFILES_LIST


class LogList(View):
    """
    List of all available logfiles
    """
    def get(self, request):
        files = LOGFILES_LIST

        files = sorted(files, key=lambda file: file["description"])

        context = {
            "files": files
        }

        return render(request, "log_list.html", context)


class LogRead(View):
    """
    Shows particular logfile
    """
    def get(self, request, id):

        for file in LOGFILES_LIST:
            if file["id"] != id:
                continue

            with open(file["path"], "r") as f:
                logfile = {
                    "id": file["id"],
                    "description": file["description"],
                    "content": f.readlines()
                }

            context = {
                "logfile": logfile,
            }

            return render(request, "log_read.html", context)

        # If log file not found
        raise Http404()


