FROM python:2.7
ENV PYTHONUNBUFFERED 1

RUN mkdir /bugeez/
RUN mkdir /bugeez/backend
WORKDIR /bugeez/backend
ADD ./requirements.txt /bugeez/backend/requirements.txt
RUN pip install -r requirements.txt
ADD . /bugeez/backend
EXPOSE 8000
CMD bash entry.sh
